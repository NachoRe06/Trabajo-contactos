import { Component, inject, input } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { ContactsService } from '../../services/contacts-service';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-list-item',
  imports: [RouterModule],
  templateUrl: './contact-list-item.html',
  styleUrl: './contact-list-item.scss'
})
export class ContactListItem {
  contact = input.required<Contact>();
  aleatorio = Math.random();
  contactsService = inject(ContactsService);

  openDeleteModal(){
    Swal.fire({
      title: "  Estas seguro?",
      icon:  "warning",
      showCancelButton: true ,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Borrar"
    }).then((result) => {
      if (result.isConfirmed) { 
        this.contactsService.deleteContact(this.contact().id);
        Swal.fire({
          title: "Borrado!",
          text: "Tu contacto fue borrado.",
          icon: "success"
        });
      }
    });
  }
}