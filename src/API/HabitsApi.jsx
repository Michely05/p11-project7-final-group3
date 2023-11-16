export class HabitsApi {
    provideHabits(){
        return fetch('http://localhost:5173/habits')
    }
}