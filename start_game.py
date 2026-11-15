"""Run the separated game files on this computer. Python 3, no extra packages."""
from argparse import ArgumentParser
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import webbrowser


def main():
    parser = ArgumentParser(description=__doc__)
    parser.add_argument('--port', type=int, default=8000)
    parser.add_argument('--no-browser', action='store_true')
    options = parser.parse_args()
    folder = Path(__file__).resolve().parent
    handler = partial(SimpleHTTPRequestHandler, directory=str(folder))
    with ThreadingHTTPServer(('127.0.0.1', options.port), handler) as server:
        url = 'http://127.0.0.1:' + str(server.server_port) + '/'
        print('KITE Adventure: ' + url, flush=True)
        print('Keep this window open while playing. Press Ctrl+C to stop.', flush=True)
        if not options.no_browser:
            webbrowser.open(url)
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            pass


if __name__ == '__main__':
    main()
