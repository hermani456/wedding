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
    const response = await fetch("/api/pdf");
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
            <TableHead>Email</TableHead>
            <TableHead>Guest</TableHead>
            <TableHead>Companion</TableHead>
            {/* <TableHead className="text-right">Amount</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.guest}</TableCell>
              <TableCell>{row.companion}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
