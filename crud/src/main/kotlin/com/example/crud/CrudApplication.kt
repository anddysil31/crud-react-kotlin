package com.example.crud

import com.example.crud.model.AnimalModel
import com.example.crud.repository.AnimalRepository
import org.springframework.boot.ApplicationRunner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean

@SpringBootApplication
class CrudApplication {
	@Bean
	fun run(repository: AnimalRepository) = ApplicationRunner{
		repository.save(AnimalModel(
			name="Saltamontes",
			family="Acridoidea"
		))
	}
}

fun main(args: Array<String>) {
	runApplication<CrudApplication>(*args)
}
