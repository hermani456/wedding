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
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <h1 className="text-xl text-center my-5 text-uno">
        <span className="text-tres font-bold text-2xl">
          {data.length !== 0 && data.length}
        </span>{" "}
        Invitados Confirmados
      </h1>
      <Table>
        <TableCaption>Guests list.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Email</TableHead>
            <TableHead>Guest</TableHead>
            <TableHead>Companion</TableHead>
            <TableHead>Address</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.guest}</TableCell>
              <TableCell>{row.companion}</TableCell>
              <TableCell>{row.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
