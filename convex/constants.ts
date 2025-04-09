import { Doc } from "./_generated/dataModel"

// export const DURATIONS = {
//     TICKET_OFFER: 30 * 60 * 1000 //30 mins (min stripe allows for checkout expiry)
// } as const;

export const WAITING_LIST_STATUS: Record<string, Doc<"waitingList">["status"]> =
    {
        WAITING: "waiting",
        OFFERED: "offered",
        PURCHASED: "purchased",
        EXPIRED: "expired"
    } as const;

export const TICKET_STATUS: Record<string, Doc<"tickets">["status"]> =
    {
        VALID: "valid",
        USED: "used",
        REFUNCED: "refunded",
        CANCELLED: "cancelled"
    } as const;