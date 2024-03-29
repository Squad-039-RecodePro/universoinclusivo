package com.universoinclusivo.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.universoinclusivo.api.models.Contato;

@Repository
public interface ContatoRepository extends JpaRepository<Contato, Integer> {

}
