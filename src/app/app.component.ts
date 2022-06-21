import { Component , OnInit} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from './shared/apiservice.service';
import { filter, map, Observable, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit{
  
  constructor(private api:ApiserviceService,private fb: FormBuilder){}

  RegistrationForm: any;
  Icecream: any;
  title = 'AssignmentsProj';
  ngOnInit(): void {

  /*  this.RegistrationForm= new FormGroup({
      'firstname': new FormControl("",[Validators.required,Validators.minLength(5)]),
      'lastname': new FormControl("",[Validators.required,Validators.minLength(1)]),
      'username': new FormControl("",[Validators.required,Validators.minLength(5)]),
      'password': new FormControl("",[Validators.required]),
      'confirmpassword': new FormControl("",[Validators.required]),
      'gender':new FormControl("",[Validators.required])
    }) */
    let users = new FormArray([
      new FormControl('ARC'),
      new FormControl('Tutorials'),
      ]);

      console.log(users)
      console.log(users.value)

      //Form Group
    this.Icecream=new FormGroup({
      //Form controls
      'name': new FormControl("",[Validators.required]),
      'address':new FormControl("",[Validators.required]),
      'phone_number': new FormControl("",[Validators.required]),
      'email': new FormControl("",[Validators.required]),
      'date_of_purchase': new FormControl("",[Validators.required]),

     //Form Array with  Formgroup which contains Formcontrols
     'users': new FormArray([
      this.fb.group({
       'items': new FormControl('xyz'),
       //'age': new FormControl('16'),
       //'dept': new FormControl('ece'),
      })
    ])
      //Form Array with simple Formcontrols
      /* 'users': new FormArray([
        new FormControl('ARC'),
        new FormControl('Tutorials')
      ]) */

    })


  }
// functions to validate the form control fields
    /* get Firstname(){
      return this.RegistrationForm.get('firstname')
    } 
    get Lastname(){
      return this.RegistrationForm.get('lastname')
    } 
    get Username(){
      return this.RegistrationForm.get('username')
    } 
    get Password(){
      return this.RegistrationForm.get('password')
    } 
    get ConfirmPassword(){
      return this.RegistrationForm.get('confirmpassword')
    } */
    get users(): FormArray {
      return this.Icecream.get('users') as FormArray;
    }
    //Adding Items by adding a Form Array
    AddItems(){
      let itemArr=this.Icecream.get('users') as FormArray;
     // Adding Form Array
        let newitem=this.fb.group({   
        'items': ''
      })
      itemArr.push(newitem);
    }

    //Removing Items
    RemoveItems(i: any){
      let arr=this.Icecream.get('users') as FormArray;
      arr.removeAt(i)
    }
    Order(){
      console.log("Items ordered are:")
      console.log(this.Icecream.get('users').value )
    }



    /*userdetails(){
        this.api.postUserdetails(this.RegistrationForm.value).subscribe((responsepost: any) => {
          console.log("Post Response for url: " )
        console.log(responsepost)
})}
    getdata(){
      this.api.getuserdata().subscribe((responseget: any) => {
        console.log("Get Response for url: " )
        console.log(responseget)
      })}

    Submit(){
      if((this.RegistrationForm.get('password').value)!=this.RegistrationForm.get('confirmpassword').value){
       window.alert("password and confirm password should be same")
      }else{
        console.log(this.RegistrationForm)
        this.userdetails();
        this.getdata();
      }
    } */
    }
    

