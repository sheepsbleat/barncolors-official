import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import randomName from "./utils/Name";
import { Picker } from "emoji-mart";
import 'emoji-mart/css/emoji-mart.css'

class PaletteMetaForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stage: "form",
            newPaletteName: randomName()
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
            this.props.palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
            )
        );
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    showEmojiPicker = () => {
        this.setState({ stage: "emoji" })
        // this.props.handleSubmit(newPaletteName)
    }
    savePalette = (emoji) => {
        const newPalette = { paletteName: this.state.newPaletteName, emoji: emoji.native };
        this.props.handleSubmit(newPalette);
    }
    render() {
        const { newPaletteName } = this.state;

        return (
            <div>
                <Dialog
                    open={this.state.stage === "emoji"}>
                    <DialogTitle>Pick a Palette Emoji</DialogTitle>
                    <Picker
                        theme={"light"}
                        set='twitter' onSelect={this.savePalette} />
                </Dialog>
                <Dialog
                    open={this.state.stage === "form"}
                    aria-labelledby='form-dialog-title'
                >
                    <DialogTitle id='form-dialog-title'>Choose A Palette Name</DialogTitle>
                    <ValidatorForm
                        onSubmit={this.showEmojiPicker}
                    >
                        <DialogContent>
                            <DialogContentText>
                                This name will be displayed under the palette preview on the home page.
            </DialogContentText>

                            <TextValidator
                                fullWidth
                                margin="normal"
                                label='Palette Name'
                                value={newPaletteName}
                                name='newPaletteName'
                                onChange={this.handleChange}
                                validators={["required", "isPaletteNameUnique"]}
                                errorMessages={["Enter Palette Name", "Name already used"]}
                            />


                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.props.hideForm} color='primary'>
                                Cancel
            </Button>
                            <Button variant='contained' color='primary' type='submit'>
                                Save Palette
              </Button>
                        </DialogActions>
                    </ValidatorForm>
                </Dialog>
            </div>
        );
    }
}
export default PaletteMetaForm;