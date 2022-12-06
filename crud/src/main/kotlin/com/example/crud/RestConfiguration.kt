package com.example.crud

import com.example.crud.model.AnimalModel
import org.springframework.context.annotation.Configuration
import org.springframework.data.rest.core.config.RepositoryRestConfiguration
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer
import org.springframework.web.servlet.config.annotation.CorsRegistry

@Configuration
open class RestConfiguration:RepositoryRestConfigurer {
    override fun configureRepositoryRestConfiguration(config: RepositoryRestConfiguration?, cors: CorsRegistry?) {
        config?.exposeIdsFor(AnimalModel::class.java)
        config?.setBasePath("/api");
    }
}