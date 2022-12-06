package com.example.crud.repository


import com.example.crud.model.AnimalModel
import org.springframework.data.repository.CrudRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource
@RepositoryRestResource(collectionResourceRel = "animal", path = "animal")
interface AnimalRepository:CrudRepository <AnimalModel, Long?>{

}