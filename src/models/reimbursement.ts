export class Reimbursement {

    reimbursement_id: number // primary key
	author: number  // foreign key -> User, not null
	amount: number  // not null
    date_submitted: number // not null
    date_resolved: number // not null
    description: string // not null
    resolver: number // foreign key -> User
    status: number // foreign key -> ReimbursementStatus, not null
    type: number // foreign key -> ReimbursementType



    constructor(reimbursement_id: number, author: number, amount: number,
                date_submitted: number, date_resolved: number, description: string = '',
                resolver: number,  status: number,  type: number){
      this.reimbursement_id = reimbursement_id;
      this.author = author;
      this.amount = amount;
      this.date_submitted = date_submitted;
      this.date_resolved = date_resolved;
      this.description = description;
      this.resolver = resolver;
      this.status = status;
      this.type = type;
    }
}