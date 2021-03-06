import CloseIcon from 'mdi-react/CloseIcon'
import WarningIcon from 'mdi-react/WarningIcon'
import * as React from 'react'
import storage from '../../browser/storage'
import { sourcegraphUrl } from '../util/context'

interface Props {
    onClose: () => void
    alertKey: string
    repoName: string
}

/**
 * A global alert telling the site admin that they need to configure repositories
 * on this site.
 */
export class NeedsRepositoryConfigurationAlert extends React.Component<Props, {}> {
    private sync = () => {
        const obj = { [this.props.alertKey]: { [this.props.repoName]: true } }
        storage.setSync(obj, () => {
            this.props.onClose()
        })
    }

    private onClick = () => {
        this.sync()
    }

    private onClose = () => {
        this.sync()
    }

    public render(): JSX.Element | null {
        return (
            <div className="sg-alert sg-alert-success site-alert">
                <a
                    onClick={this.onClick}
                    className="site-alert__link"
                    href={`${sourcegraphUrl}/site-admin/configuration`}
                    target="_blank"
                >
                    <span className="icon-inline site-alert__link-icon">
                        <WarningIcon size={17} />
                    </span>{' '}
                    <span className="underline">Configure repositories and code hosts</span>
                </a>
                &nbsp;to add to Sourcegraph.
                <div
                    style={{
                        display: 'inline-flex',
                        flex: '1 1 auto',
                        textAlign: 'right',
                        flexDirection: 'row-reverse',
                    }}
                >
                    <span
                        onClick={this.onClose}
                        style={{
                            fill: 'white',
                            cursor: 'pointer',
                            width: 17,
                            height: 17,
                            color: 'white',
                            paddingTop: 3,
                        }}
                    >
                        <CloseIcon size={17} />
                    </span>
                </div>
            </div>
        )
    }
}
