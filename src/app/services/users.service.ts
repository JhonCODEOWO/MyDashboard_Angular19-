import { computed, inject, Injectable, signal } from '@angular/core';
import { User, UserResponse, UsersResponse } from '../interfaces/req-response.interface';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient);
  #state = signal<State>({ loading: true, users: [] });

  //Señales computadas, obtendrán datos siempre que las señales dentro cambien igual.
  public users = computed(() => {
    return this.#state().users;
  });
  public loading = computed(() => {
    return this.#state().loading;
  });

  constructor() {
    this.http
      .get<UsersResponse>('https://reqres.in/api/users')
      .pipe(delay(1500))
      .subscribe((res) => {
        this.#state.set({
          loading: false,
          users: res.data,
        });
      });
  }

  getUserById(id: string) {
    return this.http.get<UserResponse>(`https://reqres.in/api/users/${id}`).pipe(
      delay(1500),
      map((res) => res.data)
    );
  }
}
