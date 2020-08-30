package com.rest.webservices.restfulwebservices.jpaStore;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemsJpaRepository extends JpaRepository<Items, Long> {
	
	List<Items> findByUsername(String username);
	
	List<Items> findByName(String name);

	List<Items> findByCatagory(String productCatagory);	

}
