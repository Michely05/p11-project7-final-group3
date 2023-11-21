export class HabitsApi {
    provideHabits(){
        return fetch('http://localhost:3000/habits')
    }
}