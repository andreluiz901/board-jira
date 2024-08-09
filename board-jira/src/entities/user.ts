import { Entity } from "@/infra/entities/entity"
import { UniqueEntityId } from "@/infra/entities/unique-entity-id"


export interface UserProps {
    name: string
    email: string
    password: string
}


export class User extends Entity<UserProps> {

    get name() {
        return this.props.name
    }

    get email() {
        return this.props.email
    }

    get password() {
        return this.props.password
    }


    static create(props: UserProps, id?: UniqueEntityId) {
        const user = new User(props, id)
    
        return user
    
    }
}