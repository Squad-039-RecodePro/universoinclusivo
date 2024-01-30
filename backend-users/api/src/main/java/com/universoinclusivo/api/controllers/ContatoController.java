package com.universoinclusivo.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.universoinclusivo.api.models.Contato;
import com.universoinclusivo.api.services.ContatoService;

@RestController
@RequestMapping("/api/contato")
public class ContatoController {

	@Autowired
	private ContatoService service;
	
	@GetMapping
	public ResponseEntity<String> teste() {
		return ResponseEntity.ok().body("Teste");
	}
	
	@PostMapping
	public ResponseEntity<String> salvar(@RequestBody Contato contato) {
				
		service.salvar(contato);
		
		return ResponseEntity.ok().body("Contato enviado!");
	}
}
