import React from "react";
import { Table, Badge } from "react-bootstrap";
import DataSection from "../components/DataSection";

function PreviousEvents() {
  return (
    <DataSection
      title="Competitions"
      subtitle="List of competitions this year"
    >
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Competition</th>
            <th>Modality</th>
            <th>Date</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Wind Challenge</td>
            <td>Mixed</td>
            <td>15/03/2021</td>
            <td>
              <Badge bg="secondary" text="dark">Finished</Badge>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>Copa Primavera</td>
            <td>Free Style</td>
            <td>27/04/2022</td>
            <td>
              <Badge bg="secondary" text="dark">
                Finished
              </Badge>
            </td>
          </tr>

          <tr>
            <td>3</td>
            <td>Regional Junior Tournament</td>
            <td>Kids</td>
            <td>10/02/2023</td>
            <td>
              <Badge bg="secondary" text="dark">Finished</Badge>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Blow King</td>
            <td>Smokers</td>
            <td>5/04/2025</td>
            <td><Badge bg="secondary"text="dark">Finished</Badge></td>

          </tr>
        </tbody>
      </Table>
    </DataSection>
  );
}

export default PreviousEvents;
