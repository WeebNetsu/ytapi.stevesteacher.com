export interface QuoteAuthorModel {
	name: string;
	language: string;
	// may not be dead yet
	ageOfDeath?: number;
	dateOfBirth: Date;
}

export interface QuoteUserModel {
	/**
	 * Let's say null users are users who did not sign up
	 */
	username: string | null;
	verified: boolean;
	type: "user" | "moderator";
}

export interface QuoteModel {
	_id: string;
	quote: string;
	author: QuoteAuthorModel;
	/**
	 * User that uploaded this data
	 */
	user: QuoteUserModel;
}
