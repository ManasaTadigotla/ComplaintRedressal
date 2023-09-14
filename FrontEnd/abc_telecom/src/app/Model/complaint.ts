enum ComplaintType{
    "LANDLINE"="LANDLINE","BROADBAND"="BROADBAND"
}
export class Complaint {
    id!: number;
    complaintType!: ComplaintType;
    subject!: string;
    description!: string;
    address!: string;
    pincode!: number;
}
