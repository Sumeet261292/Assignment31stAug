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
public class ItemsResources {
	
	@Autowired
	private ItemsHardcodedService itemsService;
	
	@GetMapping("/users/{username}/todos")
	public List<Items> getAllItems(@PathVariable String username){
		return itemsService.findAll();		
	}
	
	@GetMapping("/users/{username}/todos/{id}")
	public Items getItem(@PathVariable String username, @PathVariable long id){
		return itemsService.findById(id);
	}

	//DELETE /users/{username}/todos/{id}
	@DeleteMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteItem(
			@PathVariable String username, @PathVariable long id){
		
		Items todo = itemsService.deleteById(id);
		
		if(todo!=null) {
			return ResponseEntity.noContent().build();
		}
		
		return ResponseEntity.notFound().build();
	}
	

	//Edit/Update a Todo
	//PUT /users/{user_name}/todos/{todo_id}
	@PutMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Items> updateItem(
			@PathVariable String username,
			@PathVariable long id, @RequestBody Items todo){
		
		Items todoUpdated = itemsService.save(todo);
		
		return new ResponseEntity<Items>(todo, HttpStatus.OK);
	}
	
	@PostMapping("/users/{username}/todos")
	public ResponseEntity<Void> updateItem(
			@PathVariable String username, @RequestBody Items todo){
		
		Items createdTodo = itemsService.save(todo);
		
		//Location
		//Get current resource url
		///{id}
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
		
}
