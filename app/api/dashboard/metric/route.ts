import { responseHandler } from "@/lib/fetch";

export async function GET(request: Request) {
    return responseHandler({
        rate: '100%',
        rate2: '100%',
        rate3: '100%'
    });
}
