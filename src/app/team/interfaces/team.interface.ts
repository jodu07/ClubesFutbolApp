export interface Empty {
    success: number;
    result:  Team[];
}

export interface Team {
    team_key:  string;
    team_name: string;
    team_logo: string;
    players:   Player[];
    coaches:   Coach[];
}

export interface Coach {
    coach_name:    string;
    coach_country: null;
    coach_age:     null;
}

export interface Player {
    player_key:          number;
    player_name:         string;
    player_number:       string;
    player_country:      null;
    player_type:         PlayerType;
    player_age:          string;
    player_match_played: string;
    player_goals:        string;
    player_yellow_cards: string;
    player_red_cards:    string;
    player_image:        string;
}

export enum PlayerType {
    Defenders = "Defenders",
    Forwards = "Forwards",
    Goalkeepers = "Goalkeepers",
    Midfielders = "Midfielders",
}
