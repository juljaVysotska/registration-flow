import { Button, ButtonPalette, ButtonSize } from '../../elements/Button';
import styles from './styles.module.scss';

export const UI = () => {
    return <div className={styles.container}>
        Button

        <table className={styles.table}>
            <tr>
                <th>
                    size
                </th>
                <th>
                    palette
                </th>
                <th>
                    normal
                </th>
                <th>
                    loading
                </th>
                <th>
                    disabled
                </th>
            </tr>
            <tr>
                <td >
                    <code>
                        size=&quot;{ButtonSize.S}&quot;
                    </code>
                </td>
                <td>
                    <code>
                        palette=&quot;{ButtonPalette.PRIMARY}&quot;
                    </code>
                </td>
                <td>

                    <Button
                        palette={ButtonPalette.PRIMARY}
                        size={ButtonSize.S}
                    >
                        Text
                    </Button>
                </td>
                <td>
                    <Button
                        palette={ButtonPalette.PRIMARY}
                        size={ButtonSize.S}
                        isLoading
                    >
                        isLoading
                    </Button>
                </td>
                <td>
                    <Button
                        palette={ButtonPalette.PRIMARY}
                        size={ButtonSize.S}
                        isDisabled
                    >
                        isDisabled
                    </Button>
                </td>
            </tr>

            <tr>
                <td rowSpan={2}>
                    <code>
                        size=&quot;{ButtonSize.S}&quot;
                    </code>
                </td>
                <td>
                    <code>
                        palette=&quot;{ButtonPalette.SECONDARY}&quot;
                    </code>
                </td>
                <td>

                    <Button
                        palette={ButtonPalette.SECONDARY}
                        size={ButtonSize.S}
                    >
                        Text
                    </Button>
                </td>
                <td>
                    <Button
                        palette={ButtonPalette.SECONDARY}
                        size={ButtonSize.S}
                        isLoading
                    >
                        isLoading
                    </Button>
                </td>
                <td>
                    <Button
                        palette={ButtonPalette.SECONDARY}
                        size={ButtonSize.S}
                        isDisabled
                    >
                        isDisabled
                    </Button>
                </td>
            </tr>
        </table>
    </div>;
};