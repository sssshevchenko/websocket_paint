import {makeAutoObservable} from 'mobx';

class ToolState {
    tool = null

    constructor() {
        makeAutoObservable(this)
    }

    setTool(tool) {
        this.tool = tool
    }

    setFillStyle(color) {
        this.tool.fillColor = color
    }

    setStrokeStyle(color, socket, id) {
        this.tool.strokeStyle = color
        socket.send(JSON.stringify({
            method: 'draw',
            id: id,
            figure: {
                type: 'strokeStyle',
                color: this.tool.strokeStyle = color
            }
        }))
    }

    setStaticStrokeStyle(color) {
        this.tool.strokeStyle = color
    }

    setLineWidth(width, socket, id) {
        this.tool.lineWidth = width
        socket.send(JSON.stringify({
            method: 'draw',
            id: id,
            figure: {
                type: 'lineWidth',
                width: this.tool.lineWidth = width
            }
        }))
    }

    setStaticLineWidth(width) {
        this.tool.lineWidth = width
    }
}

export default new ToolState();