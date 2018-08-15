import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    items: any[];
    constructor(private stgService: StorageService, private router: Router) { }

    ngOnInit() {
        this.items = this.stgService.getAllObjects();
        console.log(this.items);
    }

    addNewItem() {
        this.router.navigate(['/form']);
    }

    editItem(key) {
        console.log(key);
        this.router.navigate(['/form'], { queryParams: { 'key': key } });
    }

    deleteItem(key) {
        swal({
            title: "Excluir item",
            text: 'Deseja mesmo excluir este item?',
            type: 'question',
            showConfirmButton: true,
            confirmButtonText: "Sim, excluir item",
            showCancelButton: true,
            cancelButtonText: "Nao"
        }).then((result) => {
            if (result.value) {
                try {
                    this.stgService.removeObject(key);
                    this.items = this.stgService.getAllObjects();
                    swal("Excluido com sucesso", "", "success");;
                } catch{
                    swal("Nao foi possivel excluir o item", "", "error");
                }
            } else if (result.dismiss === swal.DismissReason.cancel) {
                console.log('canceled');
                swal("Operação foi cancelada", "", "info");
            }
        });
    }
}
