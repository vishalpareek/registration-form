import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators ,FormsModule,NgForm,ValidationErrors } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmailErrModalComponent } from '../email-err-modal/email-err-modal.component';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  registrationForm: FormGroup;
  Title:string='';  
  FirstName:string='';  
  LastName:string='';   
  DOB:Date=null;    
  Email:string=''; 
  ConfirmEmail:string ='';
  PhoneNumber:number=0; 
  Password:string='';
  registeredUserId:number=0;
  emailList:Array<string>=["vishal@pareek.com","dummy@abc.com","angular@test.com","pareek@vishal.com","test@mail.com"];

  constructor(private fb: FormBuilder,private loginService: LoginServiceService,private router: Router,private dialog:MatDialog ) {   
  
  
    // To initialize FormGroup  
    this.registrationForm = fb.group({ 
      'Title' : [null, Validators.required], 
      'FirstName' : [null, Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z ]*$')])],  
      'LastName' : [null, Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z ]*$')])],    
      'DOB' : [null, Validators.required],    
      'Email':[null, Validators.compose([Validators.required,Validators.email])],
      'ConfirmEmail':[null,Validators.compose([Validators.required,LoginFormComponent.matchValues('Email')])],
      'Password':[null,Validators.required],
      'PhoneNumber':[null,Validators.compose([Validators.required,Validators.minLength(11), Validators.maxLength(11)])]
    });  
  
  }  

  ngOnInit(): void {
  }

  onFormSubmit(value){
	if(this.emailList.includes(value.Email))
	{
		this.openEmailErrModal();
	}
	else { this.loginService.registerUser({email:value.Email}).subscribe(user => {
	      const dialogRef = this.dialog.open(ConfirmationModalComponent, {
		      data: {
		        id: user.id,
		        registerUser : true
		      }
	    	});

		    dialogRef.afterClosed().subscribe(result => {
		        this.registeredUserId = user.id;
	      		this.loginUser(value);
		    });
	    },
	    (error) => {
	    	alert("User not able to register.");            
	    });
    }
  }

  openEmailErrModal(){
    const dialogRef = this.dialog.open(EmailErrModalComponent);
  }

  loginUser(value){
  	this.loginService.loginUser({email:value.Email,password:value.Password}).subscribe(response => {
  		this.setUserData(value);
      	this.router.navigateByUrl("/user");
    },
    (error) => {
    	const dialogRef = this.dialog.open(ConfirmationModalComponent, {
	      data: {
	        id: this.registeredUserId,
	        email : value.Email,
		    registerUser : false
	      }
    });

	    dialogRef.afterClosed().subscribe(result => {
	      	this.setUserData(value);
      		this.router.navigateByUrl("/user");
	    });             
    });
  }

  setUserData(data:any) {
  	this.loginService.userData = data;
  }

 public static matchValues(matchTo: string): (FormControl) => ValidationErrors | null {
    return (control: FormControl): ValidationErrors | null => {
      return !!control.parent &&
        !!control.parent.value &&
        control.value === control.parent.controls[matchTo].value
        ? null
        : { isMatching: false };
    };
 }


}
