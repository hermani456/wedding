"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import Container from "../components/Container";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/api/pdf");
    const data = await response.json();
    setData(data);
    console.log(data.map((row) => row.used));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <h1 className="text-xl text-center my-5">Invitados Confirmados</h1>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            {/* <TableHead className="w-[100px]">Invoice</TableHead> */}
            <TableHead>Codigo Invitado</TableHead>
            <TableHead>Invitado</TableHead>
            <TableHead>Acompañante</TableHead>
            <TableHead>Usado</TableHead>
            {/* <TableHead className="text-right">Amount</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.code}>
              <TableCell>{row.code}</TableCell>
              <TableCell>{row.guest}</TableCell>
              <TableCell>{row.companion}</TableCell>
              <TableCell>{row.used ? "Yes" : "No"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
