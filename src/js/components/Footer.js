import React from "react"
import LinkContainer from "./containers/LinkContainer"

export default class Footer extends React.Component {
    render() {
        return (
            <p>
                Show:
                {" "}
                <LinkContainer filter="SHOW_ALL">
                    All
                </LinkContainer>
                {", "}
                <LinkContainer filter="SHOW_ACTIVE">
                    Active
                </LinkContainer>
                {", "}
                <LinkContainer filter="SHOW_COMPLETED">
                    Completed
                </LinkContainer>
            </p>
        );
    }
}
