import {NextResponse} from "next/server";
import {getAllProducts} from "@/lib/product-data";

export async function GET() {
    const data = await getAllProducts();
    return NextResponse.json(data)
}
