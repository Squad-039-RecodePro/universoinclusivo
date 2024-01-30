package com.universoinclusivo.api.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.universoinclusivo.api.models.Usuario;
import com.universoinclusivo.api.repositories.UsuarioRepository;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario salvar(Usuario usuario) {
        //  salva o usuário no banco de dados
        return usuarioRepository.save(usuario);
    }

    public boolean verificarCredenciais(String email, String senha) {
        // Busca o usuário pelo email
        Optional<Usuario> usuario = usuarioRepository.findByEmail(email);
        // Verifica se o usuário existe e se a senha está correta
        return usuario.isPresent() && usuario.get().getSenha().equals(senha);
    }
}
