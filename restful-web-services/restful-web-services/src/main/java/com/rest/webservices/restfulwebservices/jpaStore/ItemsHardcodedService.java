package com.rest.webservices.restfulwebservices.jpaStore;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ItemsHardcodedService {
	
	private static List<Items> items = new ArrayList<>();
	private static long idCounter = 0;
	
	static {
		items.add(new Items(++idCounter, "admin","Mobiles","mi note 5 pro", "15000", "2.1","assets/Images/note5pro.jpg" ));
		items.add(new Items(++idCounter,"admin", "Laptops","Hp 15 eu152020", "64000", "5.1","assets/Images/hp15.jpg" ));
		items.add(new Items(++idCounter,"admin", "Watches","Fast Track", "3000", "2","assets/Images/fastTrackWatch.jpg" ));
		items.add(new Items(++idCounter,"admin", "Cars","Innova", "1300000", "10","assets/Images/innova.jpg" ));
	}
	
	public List<Items> findAll(){
		return items;
	}
	
	public Items save(Items item) {
		if(item.getId()==-1 || item.getId()==0) {
			item.setId(++idCounter);
			items.add(item);
		} else {
			deleteById(item.getId());
			items.add(item);
		}
		return item;
	}
	
	public Items deleteById(long id) {
		Items item = findById(id);
		
		if(item==null) return null;
		
		if(items.remove(item)) {
			return item;
		}
		
		return null;
	}

	public Items findById(long id) {
		for(Items item:items) {
			if(item.getId() == id) {
				return item;
			}
		}
		
		return null;
	}

}
