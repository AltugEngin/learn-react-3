import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const auditor = searchParams.get('user');
  const location = searchParams.get('search');
  const result=searchParams.get('result');
  const date=Date().toString();
  
  
  //console.log(parseInt(addRow["rows"][0]["count"]));
  try {
    //if (!petName || !ownerName) throw new Error('Pet and owner names required');
    //await sql`INSERT INTO Results (Auditor, Location, Result) VALUES (${petName}, ${ownerName});`;
    const addRow=await sql`SELECT COUNT(*) FROM Results WHERE Location=${location} AND Auditor=${auditor};`;
    //parseInt(addRow["rows"][0]["count"])<3 ? await sql`INSERT INTO Results (Date,Auditor, Location, Result) VALUES (${date},${auditor}, ${location},${result});` : throw new Error("Hata! : Kullanılabilir oy sayısını geçtiniz");//console.error('Kullanılabilir oy sayısını geçtiniz');
    //if (addRow<3){
    //else 
    if(parseInt(addRow["rows"][0]["count"])<3){
      await sql`INSERT INTO Results (Date,Auditor, Location, Result) VALUES (${date},${auditor}, ${location},${result});`;
    }
    else{
      throw new Error("Hata! : Kullanılabilir oy sayısını geçtiniz");
    }
  } catch (error) {
    
    return NextResponse.json({ error }, { status: 500 });
    
    
  }
 
  const pets = await sql`SELECT * FROM Results;`;
  //return NextResponse.json({ pets }, { status: 200 });
  //alert("Kayıt Başarılı!");
  return NextResponse.redirect(new URL('/',request.url));
  //return NextResponse.json({addRow});
}