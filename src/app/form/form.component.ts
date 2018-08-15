import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StorageService } from '../storage.service';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../models/item.model';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    @ViewChild('f') signUpForm: NgForm;

    keyToEdit: string;

    item: Item;

    constructor(
        private stgService: StorageService,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {

        this.item = new Item(null, null, null, "0.00", false, null, null);

        if (this.route.snapshot.queryParams['key']) {
            this.keyToEdit = this.route.snapshot.queryParams['key'];
            let i = this.stgService.getObject(this.keyToEdit);
            this.item = new Item(i.name, i.unit, i.quantity, i.price, i.perish, i.dueDate, i.fabricationDate);
        }
    }

    onSubmit() {
        if (this.keyToEdit) {
            this.stgService.updateItem(this.keyToEdit, this.item);
            this.keyToEdit = null;
        } else {
            this.stgService.addObject(this.item);
        }
        this.onReset();
    }

    onReset() {
        this.signUpForm.reset();
        this.item = new Item(null, null, null, "0.00", false, null, null);
    }

}