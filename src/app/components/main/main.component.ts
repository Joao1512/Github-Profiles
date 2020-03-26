import { ConsultaGithubService } from './../../services/consulta-github.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { faUser, faUsers, faBook, faStar, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private consultaGithubService: ConsultaGithubService,
    ) { }
    // Icones
  faUser = faUser;
  faUsers = faUsers;
  faBook = faBook;
  faStar = faStar;
  faCodeBranch = faCodeBranch;

  retornou = false;
  listaRepo: any;
  formulario: FormGroup;
  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      avatar: [null],
      followers: [null],
      repos: [null],
      bio: [null]
    });
  }
  submit() {
    if (this.formulario.valid) {
      this.retornou = false;
      const user = this.formulario.get('nome').value;
      if (user != null) {
        this.consultaGithubService.buscaUser(user).subscribe(dados => {
          this.populaDadosForm(dados);
          this.retornou = true;
        });
        this.consultaGithubService.buscaRepos(user).subscribe(dados => this.listaRepo = dados);
      }
      else {
        this.verificaValidTouched(this.formulario);
      }
    }
  }
  populaDadosForm(dados){
    this.formulario.patchValue({
      nome: dados.name,
      avatar: dados.avatar_url,
      followers: dados.followers,
      repos: dados.public_repos,
      bio: dados.bio,
    });
  }
  verificaValidTouched(campo){
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }
  aplicaCssErro(campo) {
  return {
    'is-invalid': this.verificaValidTouched(campo)
  };
  }
}
