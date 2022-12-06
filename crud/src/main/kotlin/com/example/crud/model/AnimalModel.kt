package com.example.crud.model

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id


@Entity

data class AnimalModel (
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    var id:Long? = -1,
    var name:String=" ",
    var family:String= " "
) {}