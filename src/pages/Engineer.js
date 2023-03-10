import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import TicketsCard from "../components/TicketsCard";
import MaterialTable from '@material-table/core'
import { ExportCsv, ExportPdf } from "@material-table/exporters";

function Engineer() {
    const [ticketUpdateModal, setTicketUpdateModal] = useState(false)
    const [ticketStatusCount, setTicketStatusCount] = useState({
        open: 0,
        closed: 0,
        in_progress: 0,
        blocked: 0,
        total: 1
    })
    const [message, setMessage] = useState("")

    return (
        <div className="bg-light">
            <div className="col-1"><Sidebar home='/' /></div>
            <div className="container vh-100">
                <div className="pt-4">
                    <h3 className="text-primary text-center">Welcome {localStorage.name},</h3>
                    <p className="text-muted text-center">Take a quick look at your dashboard.</p>
                </div>
                {/* cards */}
                <div className="row my-4 mx-2 text-center">
                    {/* Open */}
                    <TicketsCard
                        color='bg-primary'
                        icon='bi-pencil'
                        type='Open'
                        count={ticketStatusCount.open}
                        total={ticketStatusCount.total}
                        borders='borders-b' />

                    {/* In Progress */}
                    <TicketsCard
                        color='bg-warning'
                        icon='bi-lightning-charge'
                        type='In Progress'
                        count={ticketStatusCount.in_progress}
                        total={ticketStatusCount.total}
                        borders='borders-y' />

                    {/* Closed */}
                    <TicketsCard
                        color='bg-success'
                        icon='bi-check2-circle'
                        type='Closed'
                        count={ticketStatusCount.closed}
                        total={ticketStatusCount.total}
                        borders='borders-g' />

                    {/* Blocked */}
                    <TicketsCard
                        color='bg-secondary'
                        icon='bi-slash-circle'
                        type='Blocked'
                        count={ticketStatusCount.blocked}
                        total={ticketStatusCount.total}
                        borders='borders-grey' />

                </div>
                <hr />
                <p class="text-success">{message}</p>
                <MaterialTable
                    columns={[
                        {
                            title: "Ticket ID",
                            field: "id",
                        },
                        {
                            title: "TITLE",
                            field: "title",
                        },
                        {
                            title: "DESCRIPTIONS",
                            field: "description",
                            filtering: false
                        },
                        {
                            title: "REPORTER",
                            field: "reporter",
                        },
                        {
                            title: "PRIORITY",
                            field: "ticketPriority",
                        },
                        {
                            title: "ASSIGNEE",
                            field: "assignee",
                        },
                        {
                            title: "Status",
                            field: "status",
                            lookup: {
                                "OPEN": "OPEN",
                                "IN_PROGRESS": "IN_PROGRESS",
                                "BLOCKED": "BLOCKED",
                                "CLOSED": "CLOSED"

                            },
                        },
                    ]}
                />
            </div>
        </div>
    );
}

export default Engineer;