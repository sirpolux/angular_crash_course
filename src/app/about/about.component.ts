import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/api/products/product.service';
//import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { HttpErrorResponse } from '@angular/common/http';
//import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit{

  constructor(
    private activatedRoute:ActivatedRoute,
    private service:ProductService
  ){

  } 
  param: any;
  ngOnInit(): void { 
    console.log(this.activatedRoute)
    //this.par am =this.activatedRoute.snapshot.params['username'];
    /*
    this.param=this.activatedRoute.snapshot.queryParams['last_name'];
    this.service.getAllProductsWithLimit()
    .subscribe({
      next: (data)=> {
        console.log(data);

      }
    })
      */

    const product:ProductRepresentation={
      title:"My First product",
      category:"Shoes",
      description:"This is the first product in the line up",
      image:"https://link/sample/pic.jpg",
      price:500,
    }
    this.service.createProduct(product)
    .subscribe({
      next:(result:ProductRepresentation)=>{
        console.log(result);
      },
      error:(error:HttpErrorResponse)=>{
        console.log(error.message)

    
        if(error.error instanceof ErrorEvent){
          console.error("An Error occur: ", error.message);
        }
      }
    })
  }
  

 

}
