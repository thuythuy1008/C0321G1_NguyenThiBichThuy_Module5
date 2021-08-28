import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product';
import {ProductService} from '../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  id: number;
  productForm: FormGroup;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute,
              private router: Router, private toast: ToastrService) {
    this.id = Number(this.activatedRoute.snapshot.params.id);
    this.productService.findById(this.id).subscribe(value => {
      this.productForm.setValue(value);
    });

    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
    });
  }

  ngOnInit(): void {
  }

  submit() {
    const product = this.productForm.value;
    this.productService.editProduct(product.id, product).subscribe(() => {
      this.router.navigateByUrl('/product-list');
      this.alert();
    });
  }

  alert() {
    this.toast.success('Edit successfuly!!!', 'title');
  }
}
