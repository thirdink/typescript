import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
	eventsMap(): { [key: string]: () => void } {
		return {
			'click:.set-age': this.onSetAgeClick,
			'click:.set-name': this.onSetNameClick,
			'click:.save-model': this.onSaveClick,
		};
	}

	onSaveClick = (): void => {
		this.model.save();
	};

	onSetAgeClick = (): void => {
		this.model.setRandomAge();
	};

	onSetNameClick = (): void => {
		const input = this.parent?.querySelector('input');
		const name = input?.value;

		if (name) {
			this.model.set({ name });
		}
	};

	template(): string {
		/*html*/
		return `
        <div>
            <h1>User Form</h1>
            <div>User name: ${this.model.get('name')}</div>
            <div>User age: ${this.model.get('age')}</div>
            <input/>
            <button class='set-name'>Update Name</button>
            <button class='set-age'>Set Random Age</button>
            <button class='save-model'>Save User</button>
        </div>
        `;
	}
}
