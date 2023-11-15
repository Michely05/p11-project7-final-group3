export class HabitsApi {
    provideHabits(){
        return fetch('http://localhost:3001/habits')
    }
}