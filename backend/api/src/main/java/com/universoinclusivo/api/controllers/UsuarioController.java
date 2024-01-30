package com.universoinclusivo.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.universoinclusivo.api.models.Usuario;
import com.universoinclusivo.api.services.UsuarioService;

@RestController
@RequestMapping("/api")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/cadastro")
    public ResponseEntity<?> cadastrar(@RequestBody Usuario usuario) {
        Usuario usuarioSalvo = usuarioService.salvar(usuario);
        if (usuarioSalvo != null) {
            // Retorna uma resposta de sucesso
            return ResponseEntity.ok("Usuário cadastrado com sucesso!");
        } else {
            // Retorna uma resposta de erro
            return ResponseEntity.badRequest().body("Erro ao cadastrar usuário.");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Usuario usuario) {
        boolean autenticado = usuarioService.verificarCredenciais(usuario.getEmail(), usuario.getSenha());
        if (autenticado) {
            // Usuário autenticado com sucesso
            return ResponseEntity.ok("Usuário autenticado com sucesso!");
        } else {
            // Credenciais inválidas
            return ResponseEntity.badRequest().body("Credenciais inválidas");
        }
    }
}
