package com.universoinclusivo.api.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import com.universoinclusivo.api.models.Usuario;


import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Optional<Usuario> findByEmail(String email);
}
