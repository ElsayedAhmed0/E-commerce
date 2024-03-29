import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm!: FormGroup;
  constructor(private fb: FormBuilder,private service:AuthService,private router:Router ) { }

  ngOnInit(): void {
  }
  createForm() {
    this.userForm = this.fb.group({
      username:['' , [Validators.required]],
      email:['' , [Validators.required , Validators.email]],
      password:['' , [Validators.required]],
      confirmPassword:['' , [Validators.required]],
    })
  }

  submit() {
    const model = {
      username:this.userForm?.value.username,
      email:this.userForm?.value.email,
      password:this.userForm?.value.password,
    }
    this.service.createUser(model).subscribe((res: any)=>{
      console.log(res);
      alert("success")
      this.router.navigate(['/products'])
    })
  }
}
