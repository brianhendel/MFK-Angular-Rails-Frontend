export class Vote {
    round_id: number;
    user: string;
    vote_1_m: number;
    vote_1_f: number;
    vote_1_k: number;
    vote_2_m: number;
    vote_2_f: number;
    vote_2_k: number;
    vote_3_m: number;
    vote_3_f: number;
    vote_3_k: number;

    constructor(round_id: number, user: string) {
        this.round_id = round_id;
        this.user = user;
        this.vote_1_m = 0;
        this.vote_1_f = 0;
        this.vote_1_k = 0;
        this.vote_2_m = 0;
        this.vote_2_f = 0;
        this.vote_2_k = 0;
        this.vote_3_m = 0;
        this.vote_3_f = 0;
        this.vote_3_k = 0;
    }
}