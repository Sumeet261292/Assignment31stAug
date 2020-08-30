package com.rest.webservices.restfulwebservices.jpaStore;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Items {

	@Id
	@GeneratedValue
	private Long id;
	
	private String username;
	private String catagory;
	
	@Column(unique = true)
	private String name;
	private String price;
	private String tax;
	private String url;
	
		
	public Items() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Items(Long id, String username, String catagory, String name, String price, String tax, String url) {
		super();
		this.id = id;
		this.username = username;
		this.catagory = catagory;
		this.name = name;
		this.price = price;
		this.tax = tax;
		this.url = url;
	}



	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getCatagory() {
		return catagory;
	}

	public void setCatagory(String catagory) {
		this.catagory = catagory;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getTax() {
		return tax;
	}

	public void setTax(String tax) {
		this.tax = tax;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}	
	
}
