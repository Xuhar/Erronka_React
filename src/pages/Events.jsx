import React from "react";
import { Table, Badge } from "react-bootstrap";
import DataSection from "../components/DataSection";

function Events() {
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
            <td>Marble Wind Challenge</td>
            <td></td>
            <td>15/03/2026</td>
            <td>
              <Badge bg="success">Active</Badge>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>Copa Primavera</td>
            <td>Free Style</td>
            <td>22/04/2026</td>
            <td>
              <Badge bg="warning" text="dark">
                Incoming
              </Badge>
            </td>
          </tr>

          <tr>
            <td>3</td>
            <td>regional Tournament</td>
            <td>Kids</td>
            <td>10/02/2026</td>
            <td>
              <Badge bg="warning">Incoming</Badge>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Blow King</td>
            <td>Smokers</td>
            <td>5/04/2026</td>
            <td><Badge bg="secondary">Incoming</Badge></td>

          </tr>
        </tbody>
      </Table>
    </DataSection>
  );
}

export default Events;
