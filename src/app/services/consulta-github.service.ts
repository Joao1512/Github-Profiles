import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaGithubService {

  constructor(
    private http: HttpClient,

  ) { }
  buscaUser(user) {
    return this.http.get(`https://api.github.com/users/${user}`);
  }
  buscaRepos(user) {
    return this.http.get(`https://api.github.com/users/${user}/repos`);
  }
}
