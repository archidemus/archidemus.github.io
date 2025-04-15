import argparse
from expenses.budget_report import budget_report as br


def budget_report(save):
    br(save)


def main():
    parser = argparse.ArgumentParser(description="Archidemus CLI")
    subparsers = parser.add_subparsers(dest="command", required=True)

    # `greet` command
    parser_budget = subparsers.add_parser("budget_report", help="Monthly budget")
    parser_budget.add_argument("save", type=bool, help="Save files")

    args = parser.parse_args()

    if args.command == "budget_report":
        budget_report(args.save)


if __name__ == "__main__":
    main()
