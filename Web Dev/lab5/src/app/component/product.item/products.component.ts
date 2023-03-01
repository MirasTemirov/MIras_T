
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Item} from "../../models/item";
import {get_item_by_id, like} from "../../storage/storage";

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit{

  category_id: number = -1;
  item_id = -1;
  item : Item | undefined = undefined;

  constructor(private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      this.category_id = parseInt(<string>params.get('category_id'));
      this.item_id = parseInt(<string>params.get('id'))
      this.item = get_item_by_id(this.category_id, this.item_id);
    });
  }

  make_like(){
    like(this.category_id, this.item_id);
  }

}
