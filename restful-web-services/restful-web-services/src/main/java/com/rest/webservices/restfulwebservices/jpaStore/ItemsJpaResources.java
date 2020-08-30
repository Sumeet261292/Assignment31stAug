package com.rest.webservices.restfulwebservices.jpaStore;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class ItemsJpaResources {
	
	@Autowired
	private ItemsHardcodedService itemsService;
	
	@Autowired
	private ItemsJpaRepository itemsJpaRepository;
	
	@GetMapping("/jpa/users/{username}/todos")
	public List<Items> getAllItems(@PathVariable String username){
		return itemsJpaRepository.findByUsername(username);
		//return todoService.findAll();		
	}
	
	@GetMapping("/jpa/names/{productName}/todos")
	public List<Items> getAllItemsByName(@PathVariable String productName){
		return itemsJpaRepository.findByName(productName);
		//return todoService.findAll();		
	}
	
	@GetMapping("/jpa/catagory/{productCatagory}/todos")
	public List<Items> getAllItemsByCatagory(@PathVariable String productCatagory){
		return itemsJpaRepository.findByCatagory(productCatagory);
		//return todoService.findAll();		
	}	
	
	@GetMapping("/jpa/users/{username}/todos/{id}")
	public Items getItem(@PathVariable String username, @PathVariable long id){
		return itemsJpaRepository.findById(id).get();
		//return todoService.findById(id);
	}

	@DeleteMapping("/jpa/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteItem(
			@PathVariable String username, @PathVariable long id){
		
		//Todo todo = todoService.deleteById(id);
		itemsJpaRepository.deleteById(id);
		
//		if(todo!=null) {
//			return ResponseEntity.noContent().build();
//		}
		return ResponseEntity.noContent().build();
		
		//return ResponseEntity.notFound().build();
	}
		
	@PutMapping("/jpa/users/{username}/todos/{id}")
	public ResponseEntity<Items> updateItem(
			@PathVariable String username,
			@PathVariable long id, @RequestBody Items todo){
		
//		Todo todoUpdated = todoService.save(todo);
		Items todoUpdated = itemsJpaRepository.save(todo);
		
		return new ResponseEntity<Items>(todo, HttpStatus.OK);
	}
	
	@PostMapping("/jpa/users/{username}/todos")
	public ResponseEntity<Void> createItem(
			@PathVariable String username, @RequestBody Items todo){
		todo.setUsername(username);
		Items createdTodo = itemsJpaRepository.save(todo);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
		
}
