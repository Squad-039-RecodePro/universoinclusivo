package com.universoinclusivo.api.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.universoinclusivo.api.models.Contato;
import com.universoinclusivo.api.repositories.ContatoRepository;

@Service
public class ContatoService {

	@Autowired
	private ContatoRepository repo;
	
	public void salvar(Contato contato) {
		repo.save(contato);
	}
}
